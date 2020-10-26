package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.CompanySellerPage;
import utilities.ConfigReader;
import utilities.Driver;

public class CompanySellerStepDefinitions {

    CompanySellerPage companySeller = new CompanySellerPage();

    @Given("user on the GlobalHomepage")
    public void user_on_the_GlobalHomepage() {
        Driver.getDriver().get(ConfigReader.getProperty("url"));

    }

    @When("user clicks seller Join Now Button")
    public void user_clicks_seller_Join_Now_Button() {
       companySeller.JoinSeller.click();

    }

    @When("user clicks Company Seller")
    public void user_clicks_Company_Seller() {
        companySeller.CompanySeller.click();

    }

    @When("user enters Company Name {string}")
    public void user_enters_Company_Name(String Company_Name) {
        companySeller.CompanyName.sendKeys(Company_Name);

    }

    @When("user enters Company Mobile {string}")
    public void user_enters_Company_Mobile(String Company_Mobile) {
        companySeller.CompanyMobile.sendKeys(Company_Mobile);

    }

    @When("user enters Company Address {string}")
    public void user_enters_Company_Address(String Company_Address) {
        companySeller.CompanyAddress.sendKeys(Company_Address);

    }

    @When("user enters Name {string}")
    public void user_enters_Name(String Name) {
        companySeller.Name.sendKeys(Name);

    }

    @When("user enters Email {string}")
    public void user_enters_Email(String Email) {
        companySeller.Email.sendKeys(Email);

    }

    @When("user enters Sub Domain {string}")
    public void user_enters_Sub_Domain(String Sub_Domain) {
        companySeller.SubDomain.sendKeys(Sub_Domain);

    }

    @When("user enters Mobile Number {string}")
    public void user_enters_Mobile_Number(String Mobile_Number) {
        companySeller.MobileNumber.sendKeys(Mobile_Number);

    }

    @When("user enters Country {string}")
    public void user_enters_Country(String Country) {
        companySeller.Country.sendKeys(Country);

    }

    @When("user enters State {string}")
    public void user_enters_State(String State) {
        companySeller.State.sendKeys(State);

    }

    @When("user enters City {string}")
    public void user_enters_City(String City) {
        companySeller.City.sendKeys(City);

    }

    @When("user enters Address {string}")
    public void user_enters_Address(String Address) {
        companySeller.Address.sendKeys(Address);

    }

    @When("user enters Postal Code {string}")
    public void user_enters_Postal_Code(String Postal_Code) {
        companySeller.PostalCode.sendKeys(Postal_Code);

    }

    @When("user enters Categories {string}")
    public void user_enters_Categories(String Categories) {
        companySeller.Categories.sendKeys(Categories);

    }

    @When("user enters Password {string}")
    public void user_enters_Password(String Password) throws InterruptedException {
        companySeller.Password.sendKeys(Password);
        Thread.sleep(5000);
    }

    @Then("user clicks Registration Button")
    public void user_clicks_Registration_Button() {
 //       companySeller.Registration.click();

    }

}
