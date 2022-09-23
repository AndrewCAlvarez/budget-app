///*
//    The User class represents the structure of the data in the MySQL database.
//    The fields below are modeled after the user that would be found inside the
//    database.
//*/
//package com.budgetapp.api;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.Id;
//import javax.persistence.Table;
//import java.util.Objects;
//
//@Entity
//@Table(name = "users")
//class OldUser {
//
//    private @Id @GeneratedValue Long id;
//
//    @Column(nullable = false, unique = true, length = 45)
//    private String email;
//
//    @Column(nullable = false, unique = true, length = 45)
//    private String username;
//
//    @Column(nullable = false, length = 64)
//    private String password;
//
//    @Column(name = "first_name", nullable = false, length = 20)
//    private String firstName;
//
//    @Column(name = "last_name", nullable = false, length = 20)
//    private String lastName;
//
//    OldUser(){};
//
//    OldUser(String email, String password, String firstName, String lastName) {
//        this.email = email;
//        this.password = password;
//        this.firstName = firstName;
//        this.lastName = lastName;
//    }
//
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    @Override
//    public boolean equals(Object o) {
//
//        if (this == o)
//            return true;
//        if (!(o instanceof OldUser))
//            return false;
//        OldUser user = (OldUser) o;
//        return Objects.equals(this.id, user.id)
//            && Objects.equals(this.email, user.email)
//            && Objects.equals(this.username, user.username)
//            && Objects.equals(this.password, user.password)
//            && Objects.equals(this.firstName, user.firstName)
//            && Objects.equals(this.lastName, user.lastName);
//    }
//
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(this.id, this.email,this.username, this.password, this.firstName, this.lastName);
//    }
//
//    @Override
//    public String toString() {
//        return "User{"
//                + "id=" + this.id
//                + ", email='" + this.email + '\''
//                + ", username='" + this.username + '\''
//                + ", first name='" + this.firstName + '\''
//                + ", last name='" + this.lastName + '\'' + '}';
//    }
//}
