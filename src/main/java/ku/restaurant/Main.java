package ku.restaurant;

public class Main {
	public static void main(String[] args) {
		OrderList order = OrderList.getInstance();
		Food a = new Food("A",24.50,50);
		order.addMenu(a);
		order.addMenu(new Food("B",25,60));
		order.addMenu(new Food("C",90,10));
		System.out.println(order.findFood("A"));
		CustomerOrder fluk = new CustomerOrder();
		fluk.addFood("A", 50);
		System.out.println(fluk.checkBill());
		CustomerOrder.Memento m = fluk.save(); //2250

		
		CustomerOrder drive = new CustomerOrder();
		drive.addFood("A", 10);
		drive.addFood("C", 5);
		drive.restore(m);
		
		System.out.println(drive.checkBill());

	}
}
