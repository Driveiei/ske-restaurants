package ku.restaurant;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import ku.restaurant.OrderList;

import static org.junit.jupiter.api.Assertions.*;

public class ElectionStepdefs {
	private OrderList order;
	private CustomerOrder customerOrder;
    private Food food;

    @Before
    public void setup() {
        order = OrderList.getInstance();
        customerOrder = new CustomerOrder();
    }

    @Given("owner add food (.+) with price (.+) with quantity (.+)")
    public void owner_add_food_with_price_with_quantity(String foodName, double price, int quantity) {
        order.addMenu(new Food(foodName,price,quantity));
    }

    @Given("restaurant has new menu (.+) with price (.+) with quantity (.+)")
    public void restaurant_has_new_menu_with_price_with_quantity(String foodName, double price, int quantity) {
        order.addMenu(new Food(foodName, price, quantity));
    }

    @When("owner want to find (.+)")
    public void owner_want_to_find(String foodName) {
        food = order.findFood(foodName);
    }

    @When("customer buy food (.+) with quantity (.+)")
    public void customer_buy_food_with_quantity(String foodName, int quantity) {
        customerOrder.addFood(foodName,quantity);
    }

    @Then("the price of this bill is (.+)")
    public void the_price_of_this_bill_is(double total) {
        assertEquals(total,customerOrder.checkBill());
    }

    @Then("he found (.+)")
    public void he_found(String foodName) {
        assertEquals(foodName,food.getName());
    }

    @Then("he not found (.+)")
    public void he_not_found(String foodName) {
        assertNotEquals(foodName,food.getName());
    }
//    @When("I want to know preliminary member of party (.+)")
//    public void I_want_to_know_preliminary_member_of_party(String partyName) {
//        this.p = party.getTheParty(partyName);
//    }
//
//    @When("I want to know party list member of party (.+)")
//    public void I_want_to_know_party_list_member_of_party(String partyName) {
//        this.p = party.getTheParty(partyName);
//    }
//
//    @Then("the number of members of the house of representatives must be (.+)")
//    public void the_number_of_members_of_the_house_of_representatives_must_be(int result) {
//        assertEquals(result,party.findMembersOfHouse());
//    }
//
//    @Then("number of preliminary members are (.+)")
//    public void number_of_preliminary_members_are(int result) {
//        assertEquals(result,party.membersMustHas(p));
//    }






}
