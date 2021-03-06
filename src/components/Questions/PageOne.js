import React from 'react'
import { Formik, Form, Field, useField, FieldArray } from 'formik'
import { TextField, Button, Checkbox } from '@material-ui/core'
import MultiLine from '../Inputs/Multiline'
import PageOneStyles from '../../assets/jss/material-dashboard-react/PageOneStyles'
import SaveIcon from '@material-ui/icons/Save'

const PageOne = () => {
  const classes = PageOneStyles()
  return (
    <div className={classes.root}>
      Page One
      <Formik
        initialValues={{
          nameOfBusiness: '',
          businessDescription: '',
          fein: '',
          website: '',
          physicalAddress: '',
          sameAddress: false,
          mailingAddress: '',
          primaryContactFirstName: '',
          primaryContactLastName: '',
          primaryContactPhone: '',
          primaryContactEmail: '',
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <h4>Legal Name of Business</h4>
            <Field
              placeholder='Business Name'
              name='nameOfBusiness'
              type='input'
              as={TextField}
              label='Business Name'
              variant='outlined'
              className={classes.textField}
            />
            <h4>Brief Business Description</h4>
            <MultiLine
              placeholder='Tell us about your company, its history, and all the things that make you great!'
              name='businessDescription'
              label='Description'
              variant='outlined'
              rows={6}
              fullWidth
              className={classes.multiLine}
            />
            <h4>FEIN of Business</h4>
            <Field
              placeholder='FEIN'
              name='fein'
              type='input'
              as={TextField}
              label='FEIN Required*'
              variant='outlined'
              className={classes.textField}
            />
            <h4>Company Website</h4>
            <Field
              placeholder='Website URL'
              name='website'
              type='input'
              as={TextField}
              label='Website URL'
              variant='outlined'
              className={classes.textField}
            />
            <h4>Physical Address</h4>
            <MultiLine
              placeholder='Physical Address'
              name='physicalAddress'
              label='Physical Address'
              variant='outlined'
              rows={3}
              fullWidth
              className={classes.multiLine}
            />{' '}
            <div>
              Physical address same as mailing ?
              <Field name='sameAddress' type='checkbox' as={Checkbox} />
            </div>
            <h4>Mailing Address</h4>
            <MultiLine
              placeholder='Mailing Address'
              name='mailingAddress'
              label='Mailing Address'
              variant='outlined'
              rows={3}
              fullWidth={true}
              className={classes.multiLine}
            />
            <h4>Primary Contact Name</h4>
            <Field
              placeholder='First Name'
              name='primaryContactFirstName'
              type='input'
              as={TextField}
              label='First Name'
              variant='outlined'
              className={classes.textField}
            />
            <Field
              placeholder='Last Name'
              name='primaryContactLastName'
              type='input'
              as={TextField}
              label='Last Name'
              variant='outlined'
              className={classes.textField}
            />
            <h4>Phone</h4>
            <Field
              placeholder='Phone'
              name='primaryContactPhone'
              type='input'
              as={TextField}
              label='Phone'
              variant='outlined'
              className={classes.textField}
            />
            <h4>Primary Contact Email</h4>
            <Field
              placeholder='Email'
              name='primaryContactEmail'
              type='input'
              as={TextField}
              label='Email'
              variant='outlined'
              className={classes.textField}
            />
            <div>
              <Button
                disabled={isSubmitting}
                type='submit'
                variant='contained'
                color='primary'
                size='medium'
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PageOne
