package ku.restaurant;

import java.util.ArrayList;
import java.util.List;

public class CustomerOrder {
	private OrderList order;
	private List<Food> customerOrder;

	public CustomerOrder() {
		customerOrder = new ArrayList<>();
		order = OrderList.getInstance();
	}

	public boolean addFood(String foodName, int quantity) {
		Food food = order.findFood(foodName);
		if (food != null)
			if (quantity == food.getQuantity()) {
				customerOrder.add(food);
				order.removeFood(foodName);
				return true;
			} else if(quantity < food.getQuantity()) {
				customerOrder.add(new Food(food.getName(), food.getPrice(), quantity));
				order.soldOut(food, quantity);
				return true;
			}
		return false;
	}
	
	public double checkBill() {
		double total = 0;
		for(Food order : customerOrder) 
			total += order.getPrice()*order.getQuantity();
		return total;
	}
	

	public Memento save() {
		return new Memento(customerOrder);
	}

	public void restore(Memento m) {
		this.customerOrder = m.foodList;
	}

	static class Memento{
		private List<Food> foodList;

		private Memento(List<Food> customerOrder) {
			this.foodList = customerOrder;
		}

	}
}
