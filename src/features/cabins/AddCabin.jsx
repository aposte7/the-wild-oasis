import { useState } from 'react'
import Modal from '../../ui/Modal'
import Button from '../../ui/Button'

function AddCabin() {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<Button onClick={() => setShowModal((show) => !show)}>
				Add new cabin
			</Button>

			{showModal && <Modal closeModal={() => setShowModal(false)} />}
		</>
	)
}

export default AddCabin
