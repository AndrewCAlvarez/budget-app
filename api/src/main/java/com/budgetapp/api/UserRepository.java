/*
    The UserRepository interface acts as a CrudRepository via inheritance.
    This interface allows for many CRUD functions commonly to be abstracted
    away from SQL commands into Java OOP-centric code.
 */

package com.budgetapp.api;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

}
