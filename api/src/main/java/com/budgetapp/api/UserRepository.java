/*
    The UserRepository interface acts as a CrudRepository via inheritance.
    This interface allows for many CRUD functions commonly to be abstracted
    away from SQL commands into Java OOP-centric code.
 */

package com.budgetapp.api;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long>{
    List<User> findByLastName(String lastName);

    User findById(long id);
}
