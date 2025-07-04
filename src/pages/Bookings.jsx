import BookingTable from '../features/bookings/BookingTable'
import BookingTableOperations from '../features/bookings/BookingTableOperations'
import Heading from '../ui/Heading'
import Row from '../ui/Row'

function Booking() {
	return (
		<>
			<Row type="horizontal">
				<Heading as="h1">All Bookings</Heading>
				<BookingTableOperations />
			</Row>

			<Row>
				<BookingTable />
			</Row>
		</>
	)
}

export default Booking
