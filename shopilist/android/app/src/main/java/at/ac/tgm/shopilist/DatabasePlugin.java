package at.ac.tgm.shopilist;

import android.content.Context;

import com.couchbase.lite.CouchbaseLite;
import com.couchbase.lite.CouchbaseLiteException;
import com.couchbase.lite.Database;
import com.couchbase.lite.DatabaseConfiguration;
import com.couchbase.lite.Document;
import com.couchbase.lite.MutableDocument;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;
import org.json.JSONObject;

//Capacitorplugin to interact with the DB
@CapacitorPlugin(name = "DatabasePlugin")
public class DatabasePlugin extends Plugin
{
    //runs when it loads, then initialises the DB
    @Override
    public void load()
    {
        CouchbaseLite.init(getContext());
    }

    Database database = null;

    //TODO Rename
    //creates a new DB, similiar to a constructor
    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void initialise(PluginCall call)
    {
        try {
            database = new Database(  "ShoppilistDB", new DatabaseConfiguration());
        } catch (CouchbaseLiteException e) {
            e.printStackTrace();
        }
    }

    //closes the DB (Best practices)
    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void closeDB(PluginCall call)
    {
        try {
            database.close();
        } catch (CouchbaseLiteException e) {
            e.printStackTrace();
        }
    }

    //adds a string into the DB
    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void addString(PluginCall call)
    {
        MutableDocument lists = new MutableDocument("Lists");
        lists.setString(call.getString("key"), call.getString("value"));

        try {
            database.save(lists);
        } catch (CouchbaseLiteException e) {
            e.printStackTrace();
        }
    }

    //obtains a String from the DB
    @PluginMethod()
    public void obtainString(PluginCall call)
    {
        Document lists = database.getDocument("Lists");

        JSObject ret = new JSObject();
        ret.put("value", lists.getString(call.getString("key")));
        call.resolve(ret);
    }
}
