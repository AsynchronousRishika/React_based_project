import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import * as Yup from"yup";
import Modal from './Modal';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Form, Formik, Field, ErrorMessage } from "formik";
import { db } from '../config/firebase';

const contactSchemaValidation = Yup.object().shape({
    Name: Yup.string().required(" * Name is Required"),
    email: Yup.string().email("* Invalid Email").required(" * Email is Required"),
  });


const AddandUpdatecontact = ({ isOpen, onClose, isUpdate,contact }) => {

    const addContact = async (contact) => {
        try {
            const contactsRef = collection(db, "contacts");
            await addDoc(contactsRef, contact);
            toast.success('Added Successfully !!')
            onClose();
            
        }
        catch (error) { console.log(error);}
    }
    const UpdateContact = async (contact,id) => {
        try {
            const contactsRef = doc(db, "contacts",id);
            await updateDoc(contactsRef, contact);
            toast.success('Updated Successfully !!')
            onClose();
            
        }
        catch (error) { console.log(error);}
    }


    return (
        <div className='' >
            <Modal isOpen={isOpen}
                onClose={onClose}>
                <Formik
                 validationSchema={contactSchemaValidation}
                    initialValues={
                        isUpdate ?
                            {
                                Name: contact.Name,
                                email: contact.email,
                            }
                            : {
                                Name: '',
                                email: '',
                            }
                        }
                    onSubmit={(values) => {
                        console.log(values);
                        isUpdate?
                        UpdateContact(values,contact.id):
                        addContact(values);
                      
                    }}>
                    <Form className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1' >
                            <label htmlFor='Name'>Name:</label>
                            <Field name="Name" className="border h-10" />
                            <div className="text-red-500"  >
                                <ErrorMessage name="Name" />
                            </div>
                        </div>

                        <div className='flex flex-col gap-1' >
                            <label htmlFor='email'>Email:</label>
                            <Field type="email" name="email" className="border h-10" />
                            <div className="text-red-500"  >
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        <button className='border-red-900 border self-end bg-red-600 px-3 py-1.5'>
                            {isUpdate ? 'Update' : 'Add'}
                        </button>

                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}

export default AddandUpdatecontact;