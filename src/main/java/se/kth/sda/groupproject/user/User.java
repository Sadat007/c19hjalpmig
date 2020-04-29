package se.kth.sda.groupproject.user;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="userAccount")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "firstName")
    private String firstName;

    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "lastName")
    private String lastName;

    @Email(message = "Invalid email address! Please provide a valid email address")
    @NotEmpty(message = "Please provide an email address")
    @Column(name = "email", unique = true)
    private String email;

    @Length(min = 3, max=100, message = "Name must be between 3-100 characters")
    @Column(name = "userName")
    private String userName;

    @Length(min = 5, max=100, message = "Password length must be between 5-100 characters")
    @Column(name = "password")
    private String password;



    // Hibernate needs a default constructor to function
    public User() {}

    public User(@Email(message = "Invalid email address! Please provide a valid email address") @NotEmpty(message = "Please provide an email address") String email, @Length(min = 5, max = 100, message = "Password length most be between 5-100 characters") String password, @Length(min = 3, max = 100, message = "Name must be between 3-100 characters") String firstName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String name) {
        this.firstName = firstName;
    }

    public String getLastName() { return lastName; }

    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() { return userName; }

    public void setUserName(String userName) { this.userName = userName; }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
