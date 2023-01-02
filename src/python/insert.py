import logging;
import json;


def insert(mydb):
    sql = 'INSERT INTO hotel_details (hotel_name,location,catagory,img,menu) VALUES (%s,%s,%s,%s,%s)'
    # input_data = ['AryaBhavan','Vadasery',json.dumps(["Chinese, South Indian,Biryani, Sweets"]),'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQfpZAoBC5P-5jp9LxFwHXyOjDe8Pnxaf7A&usqp=CAU',json.dumps([
        # {
        #     "id":1,
        #     "title":"Mini-Tiffen",  
        #     "price":"Rs.100",
        #     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSnUAkx4U98-ZWx62XwcOxQCzAy11o_v6ZQ&usqp=CAU",
        #     "serve_for":2,
        #     "description":"Pure veg,2 mini-idly,min-pongal,mini-dosa,tea"
        #     },
        #     {
        #         "id":2,
        #         "title":"Ghee Roast",
        #         "price":"Rs.100",
        #         "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMusVeqg1cRnYPMGewYphXJ_mxTnMLmNUhQ&usqp=CAU",
        #         "serve_for":1,
        #         "description":"Pure veg,with 3varity of chutneys"
        #         },
        #         {
        #             "id":3,
        #             "title":"Panner Masaala",
        #             "price":"Rs.170",
        #             "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrWLUMPrhNAZyZm9XdvxFEBhyDyHv2LfFk2g&usqp=CAU",
        #             "serve_for":1,
        #             "description":"Pure veg,panner gravy with little peices"
        #             }])]
        # input_data = ['OdelRestarunt','Nagercoil',json.dumps(["Chinese, North Indian, South Indian,Biryani"]),'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxz9IxyxW7Fw-5r-MxA7-AKKkavyRzNlzwQ&usqp=CAU',json.dumps([{
        #                     "id":4,
        #                     "title":"Chicken Briyani",
        #                     "price":"Rs.210",
        #                     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh5zbgs8lxJDF_RI2BuYbT1GtYDFx6hYiyQ&usqp=CAU",
        #                     "serve_for":2,
        #                     "description": "Non-veg,onion raitha,brinjal gravy,1egg,2chicken peices"
        #                 },
        #                 {
        #                     "id":5,
        #                     "title":"Mutton Sukka",
        #                     "price":"Rs.370",
        #                     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfUN409nhOOYXX6u-3wdWHTyvqayhU3HxRw&usqp=CAU",
        #                     "serve_for":2,
        #                     "description":"Non-veg,onion raitha,brinjal gravy,1egg,2chicken peices"
        #                 },
        #                 {
        #                     "id":6,
        #                     "title":"Protta with Beef Gravy",
        #                     "price":"Rs.230",
        #                     "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tCQzMfriidsdOx5xPmi13DZuJ6i7AH2kgQ&usqp=CAU",
        #                     "serve_for":2,
        #                     "description":"non-veg,3protta,beef gravy,little peice of onions"
        #                 }])]
    input_data=['Dominos Pizza','Nagercoil',json.dumps(['Pizzas']),'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_rXTMVHgLAeMUwRRzCaNTHYkIe_qg96T6Q&usqp=CAU',json.dumps([
                    {
                        "id":7,
                        "title":"Cheesy Corn",
                        "price":"Rs.150",
                        "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ukiq6hopfqwmem48yjj3",
                        "serve_for":2,
                        "description":"Pure veg,corn,cheese"
                    },
                    {
                        "id":8,
                        "title":"Tandoori Chicken",
                        "price":"Rs.300",
                        "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nvocia0tbadvv8forqne",
                        "serve_for":2,
                        "description":"Crisp, roasted chicken wings in classic hot sauce and peri-peri flavour"
                    },
                    {
                        "id":9,
                        "title":"Creamy Tomato Pasta Veg",
                        "price":"Rs.120",
                        "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vyjjd29lce6zdpqlx4k9",
                        "serve_for":1,
                        "description":"Instant Fusilli Pasta, Harissa Sauce, Onion, Mushroom, Olives, Parsley sprinkle"
                    }])]
    cursor = mydb.cursor()
    cursor.execute(sql,input_data)
    mydb.commit()
    cursor.close()
    logging.warning("Registration inserted successfully")
    return "Registered successfully"

