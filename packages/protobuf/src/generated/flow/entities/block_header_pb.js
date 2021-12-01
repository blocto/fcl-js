// source: flow/entities/block_header.proto
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

var google_protobuf_timestamp_pb = require('@blocto/google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.flow.entities.BlockHeader', null, global);
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
proto.flow.entities.BlockHeader = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flow.entities.BlockHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flow.entities.BlockHeader.displayName = 'proto.flow.entities.BlockHeader';
}



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
  proto.flow.entities.BlockHeader.prototype.toObject = function (opt_includeInstance) {
    return proto.flow.entities.BlockHeader.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.flow.entities.BlockHeader} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.flow.entities.BlockHeader.toObject = function (includeInstance, msg) {
    var f, obj = {
      id: msg.getId_asB64(),
      parentId: msg.getParentId_asB64(),
      height: jspb.Message.getFieldWithDefault(msg, 3, 0),
      timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.flow.entities.BlockHeader}
 */
proto.flow.entities.BlockHeader.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flow.entities.BlockHeader;
  return proto.flow.entities.BlockHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flow.entities.BlockHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flow.entities.BlockHeader}
 */
proto.flow.entities.BlockHeader.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setId(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setParentId(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setHeight(value);
        break;
      case 4:
        var value = new google_protobuf_timestamp_pb.Timestamp;
        reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
        msg.setTimestamp(value);
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
proto.flow.entities.BlockHeader.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.flow.entities.BlockHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flow.entities.BlockHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.BlockHeader.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getParentId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.BlockHeader.prototype.getId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.flow.entities.BlockHeader.prototype.getId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.flow.entities.BlockHeader.prototype.getId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.BlockHeader} returns this
 */
proto.flow.entities.BlockHeader.prototype.setId = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes parent_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.BlockHeader.prototype.getParentId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes parent_id = 2;
 * This is a type-conversion wrapper around `getParentId()`
 * @return {string}
 */
proto.flow.entities.BlockHeader.prototype.getParentId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getParentId()));
};


/**
 * optional bytes parent_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getParentId()`
 * @return {!Uint8Array}
 */
proto.flow.entities.BlockHeader.prototype.getParentId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getParentId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.BlockHeader} returns this
 */
proto.flow.entities.BlockHeader.prototype.setParentId = function (value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 height = 3;
 * @return {number}
 */
proto.flow.entities.BlockHeader.prototype.getHeight = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.flow.entities.BlockHeader} returns this
 */
proto.flow.entities.BlockHeader.prototype.setHeight = function (value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.flow.entities.BlockHeader.prototype.getTimestamp = function () {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.flow.entities.BlockHeader} returns this
*/
proto.flow.entities.BlockHeader.prototype.setTimestamp = function (value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flow.entities.BlockHeader} returns this
 */
proto.flow.entities.BlockHeader.prototype.clearTimestamp = function () {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flow.entities.BlockHeader.prototype.hasTimestamp = function () {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.flow.entities);
