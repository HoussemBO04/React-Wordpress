<?php
/*
Plugin Name: Custom Registration API
Description: Adds custom API endpoints for user registration and user retrieval.
Version: 1.0
Author: Your Name
*/

function custom_api_init() {
    register_rest_route('wp/v2', '/registration', array(
        'methods' => 'POST',
        'callback' => 'custom_register_user',
    ));

    register_rest_route('wp/v2/registration', '/user/(?P<id>\d+)', array(
        'methods' => 'GET',
        'callback' => 'custom_get_user',
    ));
    
    register_rest_route('wp/v2/registration', '/create-user', array(
        'methods' => 'GET',
        'callback' => 'custom_create_user_from_link',
    ));

    register_rest_route('wp/v2/registration', '/users', array(
        'methods' => 'GET',
        'callback' => 'custom_get_all_users',
    ));
}
add_action('rest_api_init', 'custom_api_init');

function custom_register_user($request) {
    // Registration logic (same as before)
}

function custom_get_user($request) {
    $user_id = $request->get_param('id');
    $user_data = get_userdata($user_id);

    if (!$user_data) {
        return rest_ensure_response(array('error' => 'User not found.'));
    } else {
        return rest_ensure_response($user_data);
    }
}

function custom_create_user_from_link($request) {
    $params = $request->get_params();

    $username = sanitize_user($params['username']);
    $email = sanitize_email($params['email']);
    $password = $params['password'];

    $user_id = wp_create_user($username, $password, $email);

    if (is_wp_error($user_id)) {
        return rest_ensure_response(array('error' => $user_id->get_error_message()));
    } else {
        return rest_ensure_response(array('message' => 'User created successfully.'));
    }
}


function custom_get_all_users() {
    $users = get_users();

    if (empty($users)) {
        return rest_ensure_response(array('error' => 'No users found.'));
    } else {
        return rest_ensure_response($users);
    }
}