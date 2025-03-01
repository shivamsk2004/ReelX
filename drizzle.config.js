/** @type {import("drizzle-kit").Config} */
export default{
    schema:"./configs/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_u6TCa5dFDiOk@ep-sweet-term-a85sf8lb-pooler.eastus2.azure.neon.tech/reelx?sslmode=require',
    }
}