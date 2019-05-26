package ku.restaurant;

public class NullFood extends Food{

		public NullFood(String name, double price, int quantity) {
			super(name,price,quantity);
		}
		
		@Override
		public int getId() {
			return -1;
		}
		
		@Override
		public String getName() {
			return "NA";
		}
		
		@Override
		public double getPrice() {
			return -1;
		}
		
		@Override
		public int getQuantity() {
			return -1;
		}
}

