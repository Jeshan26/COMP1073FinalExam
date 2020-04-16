// JavaScript Document
//  here class is being created  with 4 constructor attributes  and class name is person

// 4 attributes are name, age , gender , interests
// all of the attributes are assigned by using this keyword which activates when any 
//  object instantiate this class and  would get all the attributes 
// but name attribute is not assigning to any variable


class Person {
  constructor(name, age, gender, interests) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  // this is the  greeting function of the above class  which just console log the name passed in the object which is instanting the person class

  // $ is an identifier  in javascript which just  represents the object related to it
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
// $ is an identifier  in javascript which just  represents the object related to it


  // this is another function of the class which   is  doing the same thing.
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}

// below  2 objects are being instantiated of person class with keyword (new) 

let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// here another class teacher(which is sub class ) is extending the parent class person and inherits all the functions of the parent class
// this is called inheritance 
// inheritace we have to initialize all the parent class attributes and additional any attribute in sub class.


class Teacher extends Person {
   // here all the attributes have to call in constructor function so that when object is instantiated it has all the attributes which are in constructor function  
  constructor(name, age, gender, interests, subject, grade) {

    //  here super keyword has used which just initialize the parent class attributes and calls parents class automatically
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

// below teacher object is being instantiated where i passed all the attributes which were in constructor function of teacher class
let teacher1 = new Teacher("Jeshan Chhabra", 20, "Male", "Cricket", "Java", 100); 