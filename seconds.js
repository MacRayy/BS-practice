// describe('examples', function() {
//   it('should format correctly', function() {
//     Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
//     Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//   });
// });

function humanReadable(seconds) {
	let time = ''
	let hh = Math.floor(seconds / 3600).toString()
	const hhModulo = seconds % 3600
	let mm = Math.floor(hhModulo / 60).toString()
	const mmModulo = hhModulo % 60
	let ss = Math.floor(mmModulo % 60).toString()
	if (hh.length !== 2) {
		hh = '0' + hh
	}
	if (mm.length !== 2) {
		mm = '0' + mm
	}
	if (ss.length !== 2) {
		ss = '0' + ss
	}
	time = hh + ':' + mm + ':' + ss
	return time
}

console.log(humanReadable(60));
