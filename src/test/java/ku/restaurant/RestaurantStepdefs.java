package ku.restaurant;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.jupiter.api.Assertions.*;

public class RestaurantStepdefs {
	private OrderList order;
	private CustomerOrder customerOrder;
    private CustomerOrder customerOrderTwo;
    private CustomerOrder customerOrderThree;
    private Food food;
    private Food nullFood = new NullFood("",-1,-1);
    private CustomerOrder.Memento m;

    @Before
    public void setup() {
        order = OrderList.getInstance();
        customerOrder = new CustomerOrder();
        customerOrderTwo = new CustomerOrder();
        customerOrderThree = new CustomerOrder();
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

    @When("owner distract (.+) with quantity (.+)")
    public void owner_distract_with_quantity(String foodName, int quantity) {
        order.soldOut(order.findFood(foodName),quantity);
    }

    @When("owner remove (.+)")
    public void owner_remove(String foodName) {
        order.removeFood(foodName);
    }

    @When("first order buy food (.+) with quantity (.+)")
    public void first_order_buy_food_with_quantity(String foodName, int quantity) {
        this.customerOrder.addFood(foodName,quantity);
        m = this.customerOrder.save();
    }

    @When("second order buy food (.+) with quantity (.+)")
    public void second_order_buy_food_with_quantity(String foodName, int quantity) {
        this.customerOrderTwo.addFood(foodName,quantity);
    }

    @When("third order buy food (.+) with quantity (.+)")
    public void third_order_buy_food_with_quantity(String foodName, int quantity) {
        this.customerOrderThree.addFood(foodName,quantity);
    }

    @Then("first order total bill is (.+)")
    public void first_order_total_bill_is(double total) {
        this.customerOrder.restore(m);
        double totalBill = customerOrder.checkBill();
        assertEquals(total,totalBill);
        order.clearStock();
    }

    @Then("restaurant have none of (.+)")
    public void restaurant_have_none_of(String foodName) {
        assertEquals(nullFood.getName(),order.findFood(foodName).getName());
        order.clearStock();
    }

    @Then("the stock has (.+) (.+) left")
    public void the_stock_has_left(int left, String foodName) {
        Food food = order.findFood(foodName);
        assertEquals(left,food.getQuantity());
        order.clearStock();
    }

    @Then("the price of this bill is (.+)")
    public void the_price_of_this_bill_is(double total) {
        assertEquals(total,customerOrder.checkBill());
        order.clearStock();
    }

    @Then("he found (.+)")
    public void he_found(String foodName) {
        assertEquals(foodName,food.getName());
        order.clearStock();
    }

    @Then("he not found (.+)")
    public void he_not_found(String foodName) {
        assertNotEquals(foodName,food.getName());
        order.clearStock();
    }
}
