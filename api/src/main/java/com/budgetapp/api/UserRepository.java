/*
    The UserRepository interface acts as a Jparepository via inheritance.
    This interface allows for many CRUD functions commonly to be abstracted
    away from SQL commands into Java OOP-centric code.
 */

package com.budgetapp.api;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
}
