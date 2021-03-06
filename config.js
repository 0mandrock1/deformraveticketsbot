/*
 * Copyright 2016 MasterCard International.
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of
 * conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 * Neither the name of the MasterCard International Incorporated nor the names of its
 * contributors may be used to endorse or promote products derived from this software
 * without specific prior written permission.
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 */
function Config() {
}

//Masterpass Merchant Url
Config.merchantUrl = process.env.MERCHANTURL || "https://demo.labs.mastercard.com/camera";
Config.port = process.env.PORT || 40410;
Config.token = process.env.PAGE_ACCESS_TOKEN || "EAAgZBsOIZCzR8BAJMZA0u3WfTBBNHFZCPUTqq2gx7JYl4uaeP2LxDUGGtCPtdhny0KGT1rTEeBW9W30EXi638Ibj6rCVZB8KcKhS1JbONHercNNH8ZAZABsQLrn2k8q5xL4YYykyaOFFAy1lAJ6qRWno7iQaMPTal8Fl7ozf6n7TdcSkoFZBKZB7m";
Config.checkoutCallback = process.env.CHECKOUT_CALLBACK_URL || "https://YOUR_CHATBOT_SERVER/checkout/callback";

module.exports = Config;
