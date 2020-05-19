import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NikitService {

  constructor() { }

 work(){
   return "nikit maniya";
 }

 Biodata(){
   return [
     {"name":"Nikit","Age":20,"height":5.6},
     {"name":"Rahul","Age":25,"height":5.9},
     {"name":"Niraj","Age":28,"height":5.8}
   ]
 }


}
