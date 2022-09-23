package com.budgetapp.api.auth;

import com.budgetapp.api.auth.User;

import java.util.Optional;

public interface UserDao {
    Optional<User> selectUserByUsername(String username);
}
