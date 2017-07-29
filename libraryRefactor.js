var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

printPlaylists: function () {
  var playlists = this.playlists;
  for (playlistId in playlists){
    var playlist = playlists[playlistId];
    console.log(playlist['id']+':', playlist['name'], '-', playlist['tracks'].length + ' tracks');
    }
  },

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function () {
var tracks = this.tracks;
  for (trackId in tracks){
    var track = tracks[trackId];
    console.log(track['id']+": " +track ['name'] + " " + track['artist'] + " " + "(" + track['album'] + ")" );
  }
},


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist: function (playlistId) {
  var playlist = this.playlists[playlistId];
  console.log (playlist['id']+ ": " + playlist['name'] + " - " + playlist['tracks'].length + ' tracks');
  for (var x in playlist['tracks']) {
    var song = playlist['tracks'][x];
    var y = library['tracks'][song];
  console.log(y['id'] + ": " + y['name'] + " " + y['artist'] + " " + "(" + y['album'] + ")");
  }
},

// printPlaylist('p01');

// adds an existing track to an existing playlist

addTrackToPlaylist: function (trackId, playlistId) {
  var playlist = this.playlists[playlistId];
  playlist['tracks'].push(trackId);
  console.log(playlist);
},

// addTrackToPlaylist("t08", "p02");

// generates a unique id
// (use this for addTrack and addPlaylist)

uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},

// adds a track to the library

addTrack: function (name, artist, album) {
  var trackId = this.uid();
  var tracks = this.tracks;
  tracks[trackId] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
  }
  console.log(this.tracks);
},

// addTrack('test', 'test1', 'test2');

// adds a playlist to the library

addPlaylist: function (name) {
var playlists = this.playlists;
var playlistId = this.uid();
  playlists[playlistId] = {
    id: playlistId,
    name: name,
    tracks: []
  }
  console.log(playlists);
},

// addPlaylist("shit");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {
  // RegExp object
//   var tracks = library['tracks']['t01']['name'];
//   var res = tracks.search(query);
//   console.log(res);
}
// printSearchResults('hghgjhgjh');

// printPlaylists();
// printTracks();

library.printPlaylists ();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t08', 'p02');
library.addTrack('1','2','3');
library.addPlaylist('shit');