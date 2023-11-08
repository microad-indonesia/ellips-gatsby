import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import i18Next from 'i18next'
import { withTrans } from '../../i18n/withTrans'
// import { withTranslation } from "react-i18next";

import './search-bar.scss'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lang: i18Next.language,
        }
    }

    // clickHandler(e) {
    //   e.preventDefault();
    // }

    render() {
        const { t } = this.props
        return (
            <div className="search-bar">
                <Form
                    className="my-4"
                    action={`/${this.state.lang}/search`}
                    method="get"
                >
                    <Form.Group>
                        <Form.Control
                            className="mr-sm-2"
                            type="text"
                            placeholder={t('menu.search')}
                            id="q"
                            name="q"
                        ></Form.Control>

                        <Button type="submit">
                            <FontAwesomeIcon
                                className="form-control-feedback button"
                                icon={faSearch}
                            ></FontAwesomeIcon>
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default withTrans(SearchBar)
