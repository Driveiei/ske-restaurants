package ku.restaurant;

import java.util.List;

import java.util.ArrayList;

public class OrderList {
    private List<Food> foodList;
    private static OrderList single_instance;

    private OrderList(){
        foodList = new ArrayList<Food>();
    }
    
    public static OrderList getInstance() 
    { 
    	if (single_instance == null) {
    		single_instance = new OrderList(); 
    	}
    	return single_instance; 
    }
    
    public void addMenu(Food food){
        foodList.add(food);
    }
    
    public Food findFood(String foodName){
        for(Food food : foodList)
            if(food.getName().equals(foodName)) return food;
        return Food.nullFood();
    }
    
    public void soldOut(Food food,int quantity) {
    	food.soldUnit(quantity);
    }
    
    public void removeFood(String foodName) {
        for (int i = 0; i < foodList.size(); i++) {
            if (foodList.get(i).getName().equals(foodName)) {
                foodList.remove(i);
                break;
            }
        }
    }

    public void clearStock(){
        foodList.clear();
    }
}
