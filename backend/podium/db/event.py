from podium.constants import MultiRecordField, SingleRecordField
from pydantic import BaseModel, Field, StringConstraints
from typing import Annotated, List, Optional


# https://docs.pydantic.dev/1.10/usage/schema/#field-customization
class EventCreationPayload(BaseModel):
    name: Annotated[str, StringConstraints(min_length=1)]
    description: Optional[Annotated[str, StringConstraints(max_length=500)]] = ""
    


class Event(EventCreationPayload):
    id: str
    votable: bool = False
    owner: SingleRecordField



class PrivateEvent(Event):
    # https://stackoverflow.com/questions/63793662/how-to-give-a-pydantic-list-field-a-default-value/63808835#63808835
    # List of record IDs, since that's what Airtable uses
    attendees: MultiRecordField = []
    join_code: str


class UserEvents(BaseModel):
    """Return information regarding what the events the user owns and what events they are attending. If they are only attending an event, don't return sensitive information like participants."""

    owned_events: List[PrivateEvent]
    # This was just the creation payload earlier and I was wondering why the ID wasn't being returned...
    attending_events: List[Event]
