import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config();

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV,
} = process.env ;


let  databaseClient = new Pool();

if(ENV=='development')
{
    databaseClient = new Pool ({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    });
}
if (ENV=='test')
{
    databaseClient = new Pool (
    {
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    });

}

export default databaseClient;