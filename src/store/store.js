
import { create } from "zustand"


const useCart = create((set) => ({
    items: [{ itemName: "jeans", id: 1, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 2, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 3, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 4, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" }, { itemName: "jeans", id: 18987, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 5, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 6, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 7, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 8, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 9, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 11, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 12, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 33, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 141, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 1411, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" },
        { itemName: "jeans", id: 111, description: "Man Jeans", price: '20', image: "https://www.fashionnova.com/cdn/shop/files/09-13-23Studio7_CC_DJ_09-24-14_6_MULTIZI01_Greencombo_P_43623_CM.jpg?v=1694807378" }
    ],
    todos:[],
    addItems: (newItems) => set({ items: newItems }),
    addTodos: (todos)=> set({todos}),
    addFeaturedItems: (newItems) => set({featuredItems: newItems})
    
}));

export default useCart