const graphql = require('graphql')
const lodash = require('lodash')

var friends=[
    {id:"1", name:"Ola", age:2, locationid:'1' },
    {id:"2", name:"Uber", age:4, locationid:'1' },
    {id:"3", name:"Swiggy", age:3, locationid:'1' },
    {id:"4", name:"PayU", age:1, locationid:'4' }
]

var locationname=[
    {city:"Chennai", id:'1'},
    {city:"Pune", id:'2'},
    {city:"Mumbai", id:'3'},
    {city:"Delhi", id:'4'},
    {city:"Kochi", id:'5'}

]

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLSchema,
    GraphQLID,
    GraphQLList
        } = graphql

const FriendType = new GraphQLObjectType(
    {
        name:"friend",
        fields:()=>(
            {
                id:{type:GraphQLID},
                name:{type:GraphQLString},
                age:{type:GraphQLInt},
                location:{
                    type:LocationType,
                    resolve(parent,args){
                        //which location resolves 
                        //to which friend for the given id
                        console.log(parent);
                        return lodash
                            .find(locationname, 
                                {id:parent.locationid})

                    }
                }
            }
        )
    }
)

const LocationType = new GraphQLObjectType(
    {
        name:"location",
        fields:()=>(
            {
                id:{type: GraphQLID},
                city:{type:GraphQLString},
                friends:{
                    type: new GraphQLList(FriendType),
                    resolve(parent, args){
                        return lodash
                                .filter(friends,
                                    {locationid:parent.id})
                    }
                }
            }
        )
    }
)

//define the root query
const RootQuery = new GraphQLObjectType(
    {
        name:'RootQueryType',
        fields:{
            friend:{
                type:FriendType,
                args:{id:{type:GraphQLID}},
                resolve(parent, args){
                    console.log(typeof(args.id));
                    //code to get data from database
                    return lodash.find(friends, {id:args.id})
                }
            },
            location:{
                type:LocationType,
                args:{id:{type:GraphQLID}},
                resolve(parent,args){
                    return lodash.find(locationname, {id:args.id})
                }
            },
            friends:{
                type:new GraphQLList(FriendType),
                resolve(parent,args){
                    return friends
                }
            },
            locations:{
                type:new GraphQLList(LocationType),
                resolve(parent, args){
                    return locationname
                }
            }
        }
    }
)


module.exports = new GraphQLSchema(
    {
        query:RootQuery
    }
)

/*
friend('2'){
    location
    
}


*/