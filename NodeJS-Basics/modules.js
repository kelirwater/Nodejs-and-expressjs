// const xyz = require("./people");

// console.log(xyz.people, xyz.ages);
// console.log(people);

const { people, ages } = require("./people");
console.log(people, ages);

const os = require("os");

console.table([
  { Label: "Platform", Value: os.platform() },
  { Label: "Home Directory", Value: os.homedir() },
  { Label: "Architecture", Value: os.arch() },
  { Label: "CPUs", Value: os.cpus() },
  { Label: "Total Memory", Value: os.totalmem() },
  { Label: "Free Memory", Value: os.freemem() },
  { Label: "Hostname", Value: os.hostname() },
  { Label: "Uptime", Value: os.uptime() },
]);
