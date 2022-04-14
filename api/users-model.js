let id = 0;

function getId() {
  return id++;
}

let users = [
  {
    id: getId(),
    username: "john117",
    password: "12345",
},
{
    id: getId(),
    username: "badlamb",
    password: "98765",
},
];

module.exports ={
    async findAll(){
    return users;
},
async findById(id) {
        const user = users.find(u => u.id == id)
        return user
    },
    
async create({ username, password }) {
        const newUser = { id: getId(), username, password }
        users.push(newUser)
        return newUser
    },
    
async update(id, changes) {
        const user = users.find(user => user.id == id)
        if (!user) return null
        
        const updatedUser = { ...changes, id }
        users = users.map(u => (u.id == id) ? updatedUser : u)
        return updatedUser
      },
      
async deleteUser (id) {
          const user = users.find(user => user.id == id)
          if (!user) return null
          
          users = users.filter(u => u.id != id)
          return user
        }
        
    }