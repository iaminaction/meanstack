import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserUtilsService {

userslink : string = "http://localhost:8000/api/users/";

users: User[] 

selUser : User

  constructor(private http : HttpClient) { }

  getAllUsers()
    {
    return this.http.get<User[]>(this.userslink);
  }
  
  getUserById(id: string)
  {
    return this.http.get<User>(this.userslink + id);
  }

  updateUser(u : User)
  {
  return this.http.put(this.userslink + u._id, u)
  }

  deleteUser(u : User)
  {
    return this.http.delete(this.userslink + u._id)
  }

  addUser(u: User)
  {
    return this.http.post(this.userslink, u)
  }

  selectUser(u: User)
  {
    this.selUser = u;
  }

  getSelectedUser(): User
  {
  return this.selUser
  }

async filterUsers(s: string){
 let allUsers = await this.http.get<User[]>(this.userslink).toPromise();

 let filteredUsers : User[]
   filteredUsers = allUsers.filter( u => {
   u.name.toLowerCase().includes(s.toLowerCase()) || u.email.toLowerCase().includes(s.toLowerCase())
 })

 return filteredUsers;
}

}
