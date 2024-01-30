export function decodeMinervaIIPacket(buffer) {
	const dataView = new DataView(buffer);

	return {
		magic: dataView.getInt16(0, true),
		status: dataView.getUint32(2, true),
		time_us: dataView.getUint32(6, true),
		main_voltage_v: dataView.getFloat32(10, true),
		pyro_voltage_v: dataView.getFloat32(14, true),
		numSatellites: dataView.getUint8(18),
		gpsFixType: dataView.getUint8(19),
		latitude_degrees: dataView.getFloat32(20, true),
		longitude_degrees: dataView.getFloat32(24, true),
		gps_hMSL_m: dataView.getFloat32(28, true),
		barometer_hMSL_m: dataView.getFloat32(32, true),
		temperature_c: dataView.getFloat32(36, true),
		acceleration_x_mss: dataView.getFloat32(40, true),
		acceleration_y_mss: dataView.getFloat32(44, true),
		acceleration_z_mss: dataView.getFloat32(48, true),
		angular_velocity_x_rads: dataView.getFloat32(52, true),
		angular_velocity_y_rads: dataView.getFloat32(56, true),
		angular_velocity_z_rads: dataView.getFloat32(60, true),
		gauss_x: dataView.getFloat32(64, true),
		gauss_y: dataView.getFloat32(68, true),
		gauss_z: dataView.getFloat32(72, true),
		kf_acceleration_mss: dataView.getFloat32(76, true),
		kf_velocity_ms: dataView.getFloat32(80, true),
		kf_position_m: dataView.getFloat32(84, true),
		w: dataView.getFloat32(88, true),
		x: dataView.getFloat32(92, true),
		y: dataView.getFloat32(96, true),
		z: dataView.getFloat32(100, true),
		checksum: dataView.getUint32(104, true),
	};
}