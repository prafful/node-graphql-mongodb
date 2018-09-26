const graphql = require('graphql')
const lodash = require('lodash')
const Friend = require('../mongoosemodels/friend')
const Location = require('../mongoosemodels/location')

/* var friends=[
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

] */

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
                        /* return lodash
                            .find(locationname, 
                                {id:parent.locationid}) */
                        return Location.findById(parent.locationid)

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
                        /* return lodash
                                .filter(friends,
                                    {locationid:parent.id}) */
                            return Friend.find({locationid:parent.id})
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
                    // return lodash.find(friends, {id:args.id})
                    return Friend.findById(args.id)
                }
            },
            location:{
                type:LocationType,
                args:{id:{type:GraphQLID}},
                resolve(parent,args){
                    // return lodash.find(locationname, {id:args.id})
                    return Location.findById(args.id)
                }
            },
            friends:{
                type:new GraphQLList(FriendType),
                resolve(parent,args){
                    // return friends
                    return Friend.find({})
                }
            },
            locations:{
                type:new GraphQLList(LocationType),
                resolve(parent, args){
                    // return locationname
                    return Location.find({})
                }
            }
        }
    }
)

const mutation = new GraphQLObjectType(
    {
        name:'mutation',
        fields:{
            addFriend:{
                type:FriendType,
                args:{
                    name:{type:GraphQLString},
                    age:{type:GraphQLInt},
                    locationid:{type:GraphQLString}
                },
                resolve(parent, args){
                    //create instance of friend model
                    let frn = new Friend({
                        name:args.name,
                        age:args.age,
                        locationid:args.locationid
                    })
                    return frn.save()
                }
            },
            addLocation:{
                type:LocationType,
                args:{
                    city:{type:GraphQLString}
                },
                resolve(parent, args){
                    let loc = new Location({
                        city: args.city
                    })
                    return loc.save()
                }
            }
        }
    }
)

module.exports = new GraphQLSchema(
    {
        query:RootQuery,
        mutation:mutation   
    }
)

/*
friend('2'){
    location
    
}


*/