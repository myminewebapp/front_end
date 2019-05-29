import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

class myCalendar extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}
export default Calendar;