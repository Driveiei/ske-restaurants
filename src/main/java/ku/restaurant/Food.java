package ku.restaurant;

public class Food extends Menu {
	
	public Food(String name, double price, int quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		id++;
	}
	
	@Override
	public int getId() {
		return id;
	}
	
	@Override
	public String getName() {
		return name;
	}
	
	@Override
	public double getPrice() {
		return price;
	}
	
	@Override
	public int getQuantity() {
		return quantity;
	}
	
	@Override
	public void soldUnit(int quantity) {
		this.quantity -= quantity;
	}
	
	@Override
	public String toString() {
		return "Food name: "+ name + " price: "+ price + " quantity: "+quantity;
	}

	public static Food nullFood() {
		return new NullFood("",-1,-1);
	}
}
