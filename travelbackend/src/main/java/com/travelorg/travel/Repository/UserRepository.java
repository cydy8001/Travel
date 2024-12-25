package com.travelorg.travel.Repository;

import org.springframework.data.repository.CrudRepository;

import com.travelorg.travel.Model.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Integer> {

}