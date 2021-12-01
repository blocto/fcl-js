// source: flow/entities/account.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('@blocto/google-protobuf');
var goog = jspb;
var global = {}

goog.exportSymbol('proto.flow.entities.Account', null, global);
goog.exportSymbol('proto.flow.entities.AccountKey', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.flow.entities.Account = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flow.entities.Account.repeatedFields_, null);
};
goog.inherits(proto.flow.entities.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flow.entities.Account.displayName = 'proto.flow.entities.Account';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.flow.entities.AccountKey = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flow.entities.AccountKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flow.entities.AccountKey.displayName = 'proto.flow.entities.AccountKey';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flow.entities.Account.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.flow.entities.Account.prototype.toObject = function (opt_includeInstance) {
    return proto.flow.entities.Account.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.flow.entities.Account} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.flow.entities.Account.toObject = function (includeInstance, msg) {
    var f, obj = {
      address: msg.getAddress_asB64(),
      balance: jspb.Message.getFieldWithDefault(msg, 2, 0),
      code: msg.getCode_asB64(),
      keysList: jspb.Message.toObjectList(msg.getKeysList(),
        proto.flow.entities.AccountKey.toObject, includeInstance),
      contractsMap: (f = msg.getContractsMap()) ? f.toObject(includeInstance, undefined) : []
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.flow.entities.Account}
 */
proto.flow.entities.Account.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flow.entities.Account;
  return proto.flow.entities.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flow.entities.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flow.entities.Account}
 */
proto.flow.entities.Account.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setBalance(value);
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setCode(value);
        break;
      case 4:
        var value = new proto.flow.entities.AccountKey;
        reader.readMessage(value, proto.flow.entities.AccountKey.deserializeBinaryFromReader);
        msg.addKeys(value);
        break;
      case 5:
        var value = msg.getContractsMap();
        reader.readMessage(value, function (message, reader) {
          jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
        });
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.flow.entities.Account.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.flow.entities.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flow.entities.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.Account.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.flow.entities.AccountKey.serializeBinaryToWriter
    );
  }
  f = message.getContractsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.Account.prototype.getAddress = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.flow.entities.Account.prototype.getAddress_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.flow.entities.Account.prototype.getAddress_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.Account} returns this
 */
proto.flow.entities.Account.prototype.setAddress = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 balance = 2;
 * @return {number}
 */
proto.flow.entities.Account.prototype.getBalance = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.Account} returns this
 */
proto.flow.entities.Account.prototype.setBalance = function (value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes code = 3;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.Account.prototype.getCode = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes code = 3;
 * This is a type-conversion wrapper around `getCode()`
 * @return {string}
 */
proto.flow.entities.Account.prototype.getCode_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getCode()));
};


/**
 * optional bytes code = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCode()`
 * @return {!Uint8Array}
 */
proto.flow.entities.Account.prototype.getCode_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getCode()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.Account} returns this
 */
proto.flow.entities.Account.prototype.setCode = function (value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * repeated AccountKey keys = 4;
 * @return {!Array<!proto.flow.entities.AccountKey>}
 */
proto.flow.entities.Account.prototype.getKeysList = function () {
  return /** @type{!Array<!proto.flow.entities.AccountKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flow.entities.AccountKey, 4));
};


/**
 * @param {!Array<!proto.flow.entities.AccountKey>} value
 * @return {!proto.flow.entities.Account} returns this
*/
proto.flow.entities.Account.prototype.setKeysList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.flow.entities.AccountKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flow.entities.AccountKey}
 */
proto.flow.entities.Account.prototype.addKeys = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.flow.entities.AccountKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flow.entities.Account} returns this
 */
proto.flow.entities.Account.prototype.clearKeysList = function () {
  return this.setKeysList([]);
};


/**
 * map<string, bytes> contracts = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.flow.entities.Account.prototype.getContractsMap = function (opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
    jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.flow.entities.Account} returns this
 */
proto.flow.entities.Account.prototype.clearContractsMap = function () {
  this.getContractsMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.flow.entities.AccountKey.prototype.toObject = function (opt_includeInstance) {
    return proto.flow.entities.AccountKey.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.flow.entities.AccountKey} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.flow.entities.AccountKey.toObject = function (includeInstance, msg) {
    var f, obj = {
      index: jspb.Message.getFieldWithDefault(msg, 1, 0),
      publicKey: msg.getPublicKey_asB64(),
      signAlgo: jspb.Message.getFieldWithDefault(msg, 3, 0),
      hashAlgo: jspb.Message.getFieldWithDefault(msg, 4, 0),
      weight: jspb.Message.getFieldWithDefault(msg, 5, 0),
      sequenceNumber: jspb.Message.getFieldWithDefault(msg, 6, 0),
      revoked: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.flow.entities.AccountKey}
 */
proto.flow.entities.AccountKey.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flow.entities.AccountKey;
  return proto.flow.entities.AccountKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flow.entities.AccountKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flow.entities.AccountKey}
 */
proto.flow.entities.AccountKey.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setIndex(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setPublicKey(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setSignAlgo(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setHashAlgo(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setWeight(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setSequenceNumber(value);
        break;
      case 7:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setRevoked(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.flow.entities.AccountKey.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.flow.entities.AccountKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flow.entities.AccountKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.AccountKey.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getSignAlgo();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHashAlgo();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getRevoked();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.flow.entities.AccountKey.prototype.getIndex = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.AccountKey} returns this
 */
proto.flow.entities.AccountKey.prototype.setIndex = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes public_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.AccountKey.prototype.getPublicKey = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes public_key = 2;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.flow.entities.AccountKey.prototype.getPublicKey_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getPublicKey()));
};


/**
 * optional bytes public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.flow.entities.AccountKey.prototype.getPublicKey_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.AccountKey} returns this
 */
proto.flow.entities.AccountKey.prototype.setPublicKey = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 sign_algo = 3;
 * @return {number}
 */
proto.flow.entities.AccountKey.prototype.getSignAlgo = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.AccountKey} returns this
 */
proto.flow.entities.AccountKey.prototype.setSignAlgo = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 hash_algo = 4;
 * @return {number}
 */
proto.flow.entities.AccountKey.prototype.getHashAlgo = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.AccountKey} returns this
 */
proto.flow.entities.AccountKey.prototype.setHashAlgo = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 weight = 5;
 * @return {number}
 */
proto.flow.entities.AccountKey.prototype.getWeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.AccountKey} returns this
 */
proto.flow.entities.AccountKey.prototype.setWeight = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 sequence_number = 6;
 * @return {number}
 */
proto.flow.entities.AccountKey.prototype.getSequenceNumber = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.AccountKey} returns this
 */
proto.flow.entities.AccountKey.prototype.setSequenceNumber = function (value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool revoked = 7;
 * @return {boolean}
 */
proto.flow.entities.AccountKey.prototype.getRevoked = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.flow.entities.AccountKey} returns this
 */
proto.flow.entities.AccountKey.prototype.setRevoked = function (value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


goog.object.extend(exports, proto.flow.entities);
