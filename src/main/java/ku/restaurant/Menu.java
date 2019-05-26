package ku.restaurant;


public abstract class Menu {
	
	protected static int id = 1;
    protected String name;
    protected double price;
    protected int quantity;

    public abstract int getId();
    
    public abstract String getName();

    public abstract double getPrice();

    public abstract int getQuantity();
    
    public abstract void soldUnit(int quantity);
}
