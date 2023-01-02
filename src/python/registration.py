import logging
import json

def Registration(mydb, req_data):
    sql = """INSERT INTO register (name,email,password,phone,address) VALUES (%s, %s,%s,%s,%s)"""
    input_data = (req_data.get('name'), req_data.get('email'),req_data.get('password'),req_data.get('phone'),req_data.get('address'))
    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    mydb.commit()
    results=json.dumps(cursor.fetchall())
    cursor.close()
    logging.warning(results)
    return results
