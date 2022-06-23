import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile-component/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile("Jhonn Hernandez Vega","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores ea nostrum sunt temporibus. A culpa cupiditate dolore iure molestias. Aliquid consequatur delectus, dicta omnis reprehenderit veritatis vitae? Animi doloremque eos id, iure laborum molestias praesentium sapiente sequi! Atque corporis cum eveniet in iusto natus officiis porro reiciendis rerum unde.");

  constructor() { }

  
  ngOnInit(): void {

  }

}
