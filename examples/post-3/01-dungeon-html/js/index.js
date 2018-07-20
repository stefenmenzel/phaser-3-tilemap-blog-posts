// "Dungeon" comes from https://github.com/mikewesthad/dungeon
const dungeon = new Dungeon({
  width: 40,
  height: 40,
  rooms: {
    width: {
      min: 5,
      max: 10
    },
    height: {
      min: 8,
      max: 20
    },
    maxArea: 150,
    maxRooms: 10
  }
});

// To see what we've got, let's dump the map into an HTML fragment that we can insert into the page.
// You can control which characters are used & you can also apply HTML attributes to control the
// style (e.g. class and/or style):
const html = dungeon.drawToHtml({
  empty: " ",
  wall: "📦",
  floor: "☁️",
  door: "🚪",
  floorAttributes: { style: "opacity: 0.25" },
  containerAttributes: { class: "dungeon", style: "line-height: 1" }
});
document.getElementById("centered-container").appendChild(html);

// Or if emoji don't load on your device, uncomment the following for boring ol' ASCII:
// const alternateHtml = dungeon.drawToHtml({
//   empty: " ",
//   wall: "&",
//   floor: "x",
//   door: "*",
//   floorAttributes: { style: "color: #d2e9ef" },
//   wallAttributes: { style: "color: #950fe2" },
//   doorAttributes: { style: "color: #f900c3; font-weight: 700;" },
//   containerAttributes: { class: "dungeon" }
// });
// document.getElementById("dungeon-container").appendChild(alternateHtml);

// You can also manually map the tiles to a 2D array of numbers or strings
const mappedTiles = dungeon.getMappedTiles({
  empty: 0,
  floor: 1,
  door: 2,
  wall: 3
});
