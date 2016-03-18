# ADS-B node Node-RED
Parser of ADS-B formatted message data.

## Installation
Use `npm install node-red-contrib-ads-b` to install.

## Usage
ADS-B is the transponder data transmitted from aircraft.  Popular tools like `dump1090` can
decode this data from an appropriate radio receiver device.  However, what is produced by these
apps is still not directly consumable as it still needs parsed.  This node takes the input from
`dump1090` in SBS1 format and transforms it into a parsed object that can then be readily
worked upon.

The input to the node is a string found in `msg.payload` that conforms to the
SBS1 format.  This is the format that can be produced from the popular `dump1090` ADS-B
decoder.  The output is a new message that has an object found at `msg.payload` which contains
some of the following fields populated:

* message_type
* transmission_type
* session_id
* aircraft_id
* hex_ident  
* flight_id  
* generated_date  
* generated_time  
* logged_date  
* logged_time  
* callsign  
* altitude  
* ground_speed  
* track  
* lat  
* lon  
* vertical_rate  
* squawk  
* alert  
* emergency  
* spi  
* is\_on\_ground  

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## History
* 2016-03-16 - First release

## Credits
Neil Kolban

## License
Apache 2.0