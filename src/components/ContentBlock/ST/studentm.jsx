import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody } from '@chakra-ui/react';
import axios from 'axios';

const StudentDetailsForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [location, setLocation] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.get(`https://some-api.com/student?name=${name}&dob=${dob}&location=${location}`);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Student Details</ModalHeader>
        <ModalBody>
          <Box p={6} rounded="md" boxShadow="lg">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name:</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="dob">Date of Birth:</FormLabel>
                  <Input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="location">Location:</FormLabel>
                  <Input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" colorScheme="teal" isLoading={isLoading}>Submit</Button>
              </Stack>
            </motion.form>
            {response && (
              <Box mt={6} p={6} rounded="md" boxShadow="lg">
                <Text>{response.message}</Text>
                {/* Render other response data as needed */}
              </Box>
            )}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentDetailsForm;
