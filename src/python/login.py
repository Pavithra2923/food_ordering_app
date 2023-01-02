import logging
import json

def checkLogin(mydb, req_data):
    # sql = """SELECT COUNT(email and password) FROM register WHERE email=%s and password=%s """
    sql = """SELECT * FROM register WHERE email=%s and password=%s """
    input_data = (req_data.get('email'), req_data.get('password'))
    cursor = mydb.cursor(buffered=True,dictionary=True)
    cursor.execute(sql, input_data)
    mydb.commit()
    results=json.dumps(cursor.fetchall())
    cursor.close()
    logging.warning(results)
    return results


