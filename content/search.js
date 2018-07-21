import React from 'react'
import { Link } from 'react-router'

import sortBy from 'lodash/sortBy'
import access from 'safe-access'

import Utils from '../utils/utils'


export default class Archives extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="page-header">
                    <h1>
                        全文搜索
                    </h1>
                </div>
            </div>
        )
    }
}