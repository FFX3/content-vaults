import conn from '../../utilities/db/db'

export default async (req, res) => {
    try {
        console.log("req nom", req.body)
        const query = 'SELECT * FROM "accounts" LIMIT 50'
        const values = []
      const result = await conn.query(
          query,
          values
      );
      console.log( "ttt",result );
  } catch ( error ) {
      console.log( error );
  }
  
  
  };
