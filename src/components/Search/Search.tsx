import { Field, Form, Formik } from "formik";
import React from "react";
import { OnSubmit, Redirect, SearchProps } from "./SearchTypes";
import { categoryValues, sortByValues } from "./selectorsValue";
import styles from "./Search.module.scss";
import { useNavigate } from "react-router-dom";

export const Search: React.FC<SearchProps> = ({ search }) => {
  const navigate = useNavigate()

  const onSubmit: OnSubmit = (value, setSubmitting) => {
    const payload = {
      ...value,
      startIndex: 0,
      maxResults: 30
    }
    search(payload, setSubmitting)
  }

  const redirect: Redirect = () => {
    navigate("/")
  }

  return (
    <Formik initialValues={{
      searchValue: "",
      category: categoryValues.all,
      sortBy: sortByValues.relevance
    }}
      onSubmit={(values, actions) => {
        onSubmit(values, actions.setSubmitting)
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.form__block}>
            <span className={styles.form__title}>Search for book</span>
            <div className={styles.form__search}>
              <Field type="text" name="searchValue" placeholder="search" className={styles.input} />
              <button type="submit" disabled={isSubmitting} className={styles.button} onClick={() => redirect()}>search</button>
            </div>
            <div className={styles.form__selectors}>
              <div className={styles.form__selector}>
                <span>Categories</span>
                <Field as="select" name="category" className={styles.select}>
                  {
                    Object.entries(categoryValues).map(([key, value]) => {
                      return <option key={key} value={value}>{value}</option>
                    })
                  }
                </Field>
              </div>
              <div className={styles.form__selector}>
                <span>Sorting by</span>
                <Field as="select" name="sortBy" className={styles.select}>
                  {
                    Object.entries(sortByValues).map(([key, value]) => {
                      return <option key={key} value={value}>{value}</option>
                    })
                  }
                </Field>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik >
  );
};
