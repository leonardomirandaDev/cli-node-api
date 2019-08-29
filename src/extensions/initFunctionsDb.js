module.exports = (toolbox) => {
  
  async function setSequelizeDependence(system, project,) {
    return system.run(
      `cd ${project} && yarn add sequelize && yarn add sequelize-cli -D`,
    { trim: true })
  }
  toolbox.setSequelizeDependence = setSequelizeDependence;

  async function createConfigDb(template, project, dbInformation) {
    const { dialect, host, username, password, database} = dbInformation;
    template.generate({
      template: 'database.js.ejs',
      target: `${project}/src/config/database.js`,
      props: { dialect, host, username, password, database }
    })
  }
  toolbox.createConfigDb = createConfigDb;

}