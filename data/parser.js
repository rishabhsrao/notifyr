self.port.on("notifyr.parser.parseMailCounts", function(innerHTML) {
  try {
    console.log("notifyr", "main", "parseMailCounts", "Splitting el", el);
    var counts = el.innerHTML.split("/");

    console.log("notifyr", "main", "parseMailCounts", "Assigning counts", counts);
    var mailCounts = {
      unreadMail: parseInt(counts[0], 10),
      total: parseInt(counts[1], 10)
    };

    console.log("notifyr", "main", "parseMailCounts", "Assigned counts", mailCounts);
    self.port.emit("notifyr.parser.parsedMailCounts", mailCounts);
  } catch(e) {
    self.port.emit("notifyr.error", e);
  }
});