from http import HTTPStatus
from typing import Any, Dict, Optional, Union, cast

import httpx

from ... import errors
from ...client import Client
from ...models.bad_request import BadRequest
from ...models.internal_server_error import InternalServerError
from ...models.not_found import NotFound
from ...types import UNSET, Response


def _get_kwargs(
    id: str,
    *,
    client: Client,
    nonce: int,
) -> Dict[str, Any]:
    url = "{}/verification/policies/{id}".format(client.base_url, id=id)

    headers: Dict[str, str] = client.get_headers()
    cookies: Dict[str, Any] = client.get_cookies()

    params: Dict[str, Any] = {}
    params["nonce"] = nonce

    params = {k: v for k, v in params.items() if v is not UNSET and v is not None}

    return {
        "method": "delete",
        "url": url,
        "headers": headers,
        "cookies": cookies,
        "timeout": client.get_timeout(),
        "params": params,
    }


def _parse_response(
    *, client: Client, response: httpx.Response
) -> Optional[Union[Any, BadRequest, InternalServerError, NotFound]]:
    if response.status_code == HTTPStatus.OK:
        response_200 = cast(Any, None)
        return response_200
    if response.status_code == HTTPStatus.BAD_REQUEST:
        response_400 = BadRequest.from_dict(response.json())

        return response_400
    if response.status_code == HTTPStatus.NOT_FOUND:
        response_404 = NotFound.from_dict(response.json())

        return response_404
    if response.status_code == HTTPStatus.INTERNAL_SERVER_ERROR:
        response_500 = InternalServerError.from_dict(response.json())

        return response_500
    if client.raise_on_unexpected_status:
        raise errors.UnexpectedStatus(f"Unexpected status code: {response.status_code}")
    else:
        return None


def _build_response(
    *, client: Client, response: httpx.Response
) -> Response[Union[Any, BadRequest, InternalServerError, NotFound]]:
    return Response(
        status_code=HTTPStatus(response.status_code),
        content=response.content,
        headers=response.headers,
        parsed=_parse_response(client=client, response=response),
    )


def sync_detailed(
    id: str,
    *,
    client: Client,
    nonce: int,
) -> Response[Union[Any, BadRequest, InternalServerError, NotFound]]:
    """Delete the verification policy by id

     Delete the verification policy by id

    Args:
        id (str):
        nonce (int):

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[Any, BadRequest, InternalServerError, NotFound]]
    """

    kwargs = _get_kwargs(
        id=id,
        client=client,
        nonce=nonce,
    )

    response = httpx.request(
        verify=client.verify_ssl,
        **kwargs,
    )

    return _build_response(client=client, response=response)


def sync(
    id: str,
    *,
    client: Client,
    nonce: int,
) -> Optional[Union[Any, BadRequest, InternalServerError, NotFound]]:
    """Delete the verification policy by id

     Delete the verification policy by id

    Args:
        id (str):
        nonce (int):

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[Any, BadRequest, InternalServerError, NotFound]]
    """

    return sync_detailed(
        id=id,
        client=client,
        nonce=nonce,
    ).parsed


async def asyncio_detailed(
    id: str,
    *,
    client: Client,
    nonce: int,
) -> Response[Union[Any, BadRequest, InternalServerError, NotFound]]:
    """Delete the verification policy by id

     Delete the verification policy by id

    Args:
        id (str):
        nonce (int):

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[Any, BadRequest, InternalServerError, NotFound]]
    """

    kwargs = _get_kwargs(
        id=id,
        client=client,
        nonce=nonce,
    )

    async with httpx.AsyncClient(verify=client.verify_ssl) as _client:
        response = await _client.request(**kwargs)

    return _build_response(client=client, response=response)


async def asyncio(
    id: str,
    *,
    client: Client,
    nonce: int,
) -> Optional[Union[Any, BadRequest, InternalServerError, NotFound]]:
    """Delete the verification policy by id

     Delete the verification policy by id

    Args:
        id (str):
        nonce (int):

    Raises:
        errors.UnexpectedStatus: If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
        httpx.TimeoutException: If the request takes longer than Client.timeout.

    Returns:
        Response[Union[Any, BadRequest, InternalServerError, NotFound]]
    """

    return (
        await asyncio_detailed(
            id=id,
            client=client,
            nonce=nonce,
        )
    ).parsed
